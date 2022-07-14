
# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

HELP_FUN = \
    %help; \
    while(<>) { push @{$$help{$$2 // 'main'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
    print "usage: make [target]\n\n"; \
    for (sort keys %help) { \
    print "${WHITE}$$_:${RESET}\n"; \
    for (@{$$help{$$_}}) { \
    $$sep = " " x (32 - length $$_->[0]); \
    print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
    }; \
    print "\n"; }

.PHONY: help
help: ## Show all make targets.
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)

.PHONY: clean
clean: ## Clean all development artifacts.
	rm -rf ./node_modules ./build


# ================================================
# Install
# ================================================

.PHONY: install
install: ##@install Install all dependencies.
	@npm install

.PHONY: install-dev
install-dev: ##@install Install only dev dependencies.
	@npm install --only=dev


# ================================================
# Check
# ================================================

.PHONY: check
check: | check-lint ##@check Run all checks.

.PHONY: check-lint
check-lint: ##@check Check code linting (eslint).
	@npm run lint


# ================================================
# Test
# ================================================

.PHONY: test
test: ##@test Run unit tests.
	@npm run test


# ================================================
# Build
# ================================================

.PHONY: build
build: ##@build Build production frontend.
	@if [ "${VERSION}" = "" ]; then \
		npm --no-git-tag-version --allow-same-version true version from-git; \
	else \
		npm --no-git-tag-version --allow-same-version true version ${VERSION}; \
	fi
	@npm run build


# ================================================
# Run
# ================================================

.PHONY: run
run: ##@run Run frontend development server.
	@npm start
